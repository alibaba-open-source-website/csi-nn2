---
sidebar_position: 1
---

# Interface

The interface of SHL uses T-HEAD neural network library API for XuanTie CPU platform: CSI-NN2, CSI-NN2's documentation is built by source code.

## NN Interface
CSI-NN2 provides various network layer interfaces. All network layer interfaces are declared in csi_nn.h .
The NN interface that prebuilt from source code shows detail:《 [NN function](https://zhangwm-pt.github.io/shl/group__NN.html) 》.

## Init Interface
CSI-NN2 provides various initialization interfaces at the network layer. All initialization interfaces are declared in csi_nn.h。
The initialization interface assigns values to the callback function pointer (params->base) in the network layer parameter description structure based on different conditions.
The init interface  that prebuilt from source code shows detail:《 [Initialize function](https://zhangwm-pt.github.io/shl/group__INIT.html) 》.

## Auxiliary Interface
CSI-NN2 provides a set of optional auxiliary functions in addition to various network layer interfaces. 
The additional function interface can be used to assist in constructing the process executed according to the diagram, assigning and modifying the operation structure, etc.
The declaration of the auxiliary function in csinn_runtime.h .
The auxiliary interface  that prebuilt from source code shows detail:《 [Auxiliary function](https://zhangwm-pt.github.io/shl/group__AUX.html) 》.

## Data Structure
The Data Structure that prebuilt from source code shows detail:《 [Data structure](https://zhangwm-pt.github.io/shl/group__DS.html) 》.
