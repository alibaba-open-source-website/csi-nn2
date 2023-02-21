---
sidebar_position: 3
---

# API usage

## Frame Structure

SHL can be divided into the following modules: 

1. Per-layer API：The operator of the neural network model is used as a unit to provide separate docking interfaces for common operators. In addition, auxiliary interfaces are provided to assist in managing the execution of the entire network model.
2. Reference Runtime： the Reference implementation of heterogeneous execution engines, including subgraph division and memory allocation. 
3. Vector Instruction OPT：the Instruction set customized for the xuantie series CPU. 
4. Driver Wrapper：the implementation of various NPU Driver interfaces. 

Per-layer API connects to different deployment tool frameworks based on different target platforms: 
* directly call the Vector Instruction OPT to perform layer-by-layer execution. 
* directly call the Driver Wrapper structure diagram to send the complete diagram to the NPU Driver for execution. 
* call the Reference Runtime and pass in the sub-graph partitioning instructions. Reference Runtime choose to schedule different acceleration hardware to execute different sub-graphs. 

According to the major categories of execution, SHL interfaces can be used in two main ways: 
* layer execution
* graph Execution 

## Layer execution 
for computing units that do not require driver assistance, such as CPU and DSP, we recommend that you use interfaces by executing each layer in sequence.

Take a model with only one convolution layer and one relu layer as an example: 
### Sample code
the simplest layer-by-layer code is as follows. After the csinn_conv2d function is executed, the convolution execution result can be obtained from output0. after the csinn_relu function is executed, the relu execution result can be obtained from output1.


``` c
struct csinn_tensor *input = input_init();
struct csinn_tensor *output0 = output0_init();
struct csinn_tensor *kernel = kernel_init();
struct csinn_tensor *bias = bias_init();
struct csinn_conv2d_params *params0 = params0_init();

csinn_conv2d(input, output0, kernel, bias, params0);

struct csinn_tensor *output1 = output1_init();
struct csinn_relu_params *params1 = params1_init();

csinn_relu(output0, output1, params1);

```

The initialization values of csinn_tensor, csinn_relu_params, and csinn_conv2d_params. For more information, see chapter data structure description

## Graph Execution 
for computing units that require large-scale driver assistance, such as NPU and GPU, they often have their custom graph structures. We recommend that you use the SHL layer to construct a graph. Finally, the graph is executed in accordance with the graph. 
When heterogeneous computing is required on the target platform, we recommend that you use graph execution.
### Sample code
compared with layer-by-layer execution, an additional structure csinn_session is introduced to store the graph structure.
The sample code is as follows:

``` c
csinn_() {
    /* alloc session */
    csinn_session_init(session);
    csinn_set_input_number(1, session);
    csinn_set_output_number(1, session);

    /* init input, output0, kernel, bias, params0 */
    ...

    /* set input as graph's first node */
    csinn_pnna_input_setup(input, session);

    /* graph_input_index = 0 */
    csinn_set_input(graph_input_index, input, session);

    csinn_conv2d(input, output0, kernel, bias, &params0);

    /* init output1, params1 */
    ...

    csinn_relu(output0, output1, params1);

    /* graph_output_index = 0 */
    csinn_set_output(graph_output_index, output1, session);

    /* call compiler */
    csinn_session_setup(session);
}

csinn_run() {
    csinn_update_input(graph_input_index, input_tensor, session);
    csinn_session_run(session);
}

```

The preceding code is divided into two functions: 
* construction diagram 
* execution chart

The process of constructing the graph is as follows: 
* initialize the session and set the number of inputs and outputs. 
* initialize the input node of the graph. Generally, the input node of the graph is also the first node of the entire graph. 
* csinn_set_input specifies the input node in the figure and the number of inputs the node is. 
* call csinn_conv2d, csinn_relu, and add operator nodes to the graph. 
* csinn_set_output is the node of the output specified in the figure and the number of outputs the node is. 
* csinn_session_setup is the end of graph construction. Generally, the dynamic compiler in the driver is called here to compile the graph into NPU executable binary. 

The execution process is divided into two steps: 
* set the input data required to execute the model
* execution chart

