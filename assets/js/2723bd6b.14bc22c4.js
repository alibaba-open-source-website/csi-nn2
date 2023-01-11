"use strict";(self.webpackChunkcsi_nn_2=self.webpackChunkcsi_nn_2||[]).push([[59],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={slug:"deploy on th1520",title:"How to Deploy a Neural Network on TH1520",authors:"zhangwm",tags:["TH1520","C910","NPU","Wujian600"]},r="Introduction",l={permalink:"/blog/deploy on th1520",editUrl:"https://github.com/alibaba-open-source-website/easyexcel/tree/main/blog/2023-01-11-deploy-on-th1520/index.md",source:"@site/blog/2023-01-11-deploy-on-th1520/index.md",title:"How to Deploy a Neural Network on TH1520",description:"T-Head has recently introduced a high-performance SoC prototyping, i.e. TH1520, which is built on the Wujian600 chip development platform. With a quad-core XuanTie C910 CPU withbuilt-in 4-TOPS NPU, TH1520 engenders a new combination of CPU and AI computing.",date:"2023-01-11T00:00:00.000Z",formattedDate:"January 11, 2023",tags:[{label:"TH1520",permalink:"/blog/tags/th-1520"},{label:"C910",permalink:"/blog/tags/c-910"},{label:"NPU",permalink:"/blog/tags/npu"},{label:"Wujian600",permalink:"/blog/tags/wujian-600"}],readingTime:6.055,hasTruncateMarker:!1,authors:[{name:"Wenmeng Zhang",title:"Engineer @ T-Head",url:"https://github.com/zhangwm-pt",imageURL:"https://github.com/zhangwm-pt.png",key:"zhangwm"}],frontMatter:{slug:"deploy on th1520",title:"How to Deploy a Neural Network on TH1520",authors:"zhangwm",tags:["TH1520","C910","NPU","Wujian600"]}},s={authorsImageUrls:[void 0]},c=[{value:"HHB",id:"hhb",level:2},{value:"SHL",id:"shl",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"T-Head has recently introduced a high-performance SoC prototyping, i.e. TH1520, which is built on the Wujian600 chip development platform. With a quad-core XuanTie C910 CPU withbuilt-in 4-TOPS NPU, TH1520 engenders a new combination of CPU and AI computing. "),(0,o.kt)("p",null,"In this blog, we will describe the process of how to deploy a neural network model on C910 and on C910 and NPU simultaneously."),(0,o.kt)("h1",{id:"tools"},"Tools"),(0,o.kt)("p",null,"T-Head offers two open-source deployment tools that enable seamless, highly efficient integration of NN frameworks and underlying hardware:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Heterogeneous Honey Badge)(HHB): It supports models from different NN frameworks, and provides quantization and graph optimization."),(0,o.kt)("li",{parentName:"ul"},"Structure of Heterogeneous Library (SHL): It is a common interface that is compatible with all hardware types, whil offering a reference schedule that facilitates software portability.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tool flow",src:a(7997).Z,width:"880",height:"524"})),(0,o.kt)("h2",{id:"hhb"},"HHB"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.xrvm.com/tool-details?id=4056748601592913921#Download"},"HHB")," is a collection of tools provided by T-Head to deploy neural network models on XuanTie processors. These tools can be incorporated for compilation, profiling, and simulation. "),(0,o.kt)("p",null,"Its framework is based on Apache TVM, which is an end-to-end machine learning compiler structure. We have shared the source code on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/T-head-Semi/tvm"},"GitHub"),"."),(0,o.kt)("p",null,"HHB supports models such as Caffe, TensorFlow, ONNX, and TensorFlow Lite. It can convert these models into unified intermediate expressions for graphing performance optimization."),(0,o.kt)("p",null,"In addition, HHB supports multiple quantization methods to handle various data types. This framework can automatically provide the optimal scheme for the specified XuanTie CPU platform. After quantization, HHB generates a graph structure in C code from the intermediate expression. Each node of the graph structure is constructed by calling the CSI-NN2 API."),(0,o.kt)("p",null,"Here is an example to use HHB in deploying MobileNet model on TH1520. The sample code shows the hhb command to compile the model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'hhb -C --board light --calibrate-dataset ./cat.jpg --model-file ./mobilenetv1.prototxt ./mobilenetv1.caffemodel --data-mean "103.94 116.98 123.68" --data-scale 0.007843 --output . --quantization-scheme="int8_asym" --pixel-format BGR\n')),(0,o.kt)("p",null,"The following content describes the parameter options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C: specifies to execute the main command until C code is generated."),(0,o.kt)("li",{parentName:"ul"},"board: emphasizes as the destination platform; light is an alias of TH1520."),(0,o.kt)("li",{parentName:"ul"},"calibrate-dataset: specifies the calibration image used for quantization."),(0,o.kt)("li",{parentName:"ul"},"model-file: specifies a MobileNet model downloaded to the current directory. A Caffe model is divided into two files. The files following the option are not sequence-sensitive."),(0,o.kt)("li",{parentName:"ul"},"data-mean: defines a mean."),(0,o.kt)("li",{parentName:"ul"},"data-scale: defines a scale."),(0,o.kt)("li",{parentName:"ul"},"output: describes the current directory as the path to store files that you need to generate."),(0,o.kt)("li",{parentName:"ul"},"quantization-scheme: identifies a quantization scheme. "),(0,o.kt)("li",{parentName:"ul"},"pixel-format: identifies the input image format required by the model training.")),(0,o.kt)("p",null,"After the command is executed, multiple files such as main.c and model.c are generated in the current directory:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"main.c: the reference entry to the sample program."),(0,o.kt)("li",{parentName:"ul"},"model.c: a model structure file that describes the model."),(0,o.kt)("li",{parentName:"ul"},"hhb.hm: the weights converted to int8."),(0,o.kt)("li",{parentName:"ul"},"io.c: the helper function for reading and writing files."),(0,o.kt)("li",{parentName:"ul"},"io.h: the declaration of the helper function for above files."),(0,o.kt)("li",{parentName:"ul"},"process.c: the image preprocessing function."),(0,o.kt)("li",{parentName:"ul"},"process.h: the declaration of the above function.")),(0,o.kt)("p",null,"After the HHB command generates code, the gcc command performs binary encoding."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"riscv64-unknown-linux-gnu-gcc -O0 -g3 -march=rv64gcv0p7_zfh_xtheadc -mabi=lp64d -I/home -I/home/install_nn2/include -I/home/decode/install/include -o c_runtime  main.c model.c io.c process.c -L/home/install_nn2/lib -L/home/decode/install/lib/rv -ljpeg -lpng -lz -lstdc++ -lshl_rvv -lm -static -Wl,--gc-sections\n")),(0,o.kt)("p",null,"The following content describes the parameter options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O0 -g3: specifies the optimization option. In this example, you can use the debug-level O0 only."),(0,o.kt)("li",{parentName:"ul"},"march: identifies the architecture option for C910."),(0,o.kt)("li",{parentName:"ul"},"mabi: identifies the application binary interface (ABI) option for C910."),(0,o.kt)("li",{parentName:"ul"},"I: describes the location of the header file that is used during compilation."),(0,o.kt)("li",{parentName:"ul"},"o: describes the name of the executable file needed to generate."),(0,o.kt)("li",{parentName:"ul"},"main.c model.c io.c process.c: the source file yu for compilation."),(0,o.kt)("li",{parentName:"ul"},"L: specifies the path to store the specified library."),(0,o.kt)("li",{parentName:"ul"},"ljpeg: links to a JPEG decoding library."),(0,o.kt)("li",{parentName:"ul"},"lpng: links to a PNG decoding library."),(0,o.kt)("li",{parentName:"ul"},"lz: links to a zlib."),(0,o.kt)("li",{parentName:"ul"},"lstdc++: links to a standard C++ library."),(0,o.kt)("li",{parentName:"ul"},"lshl_rvv: links to an optimized version library of C910 in SHL."),(0,o.kt)("li",{parentName:"ul"},"lm: links to a standard math library."),(0,o.kt)("li",{parentName:"ul"},"static: a static link."),(0,o.kt)("li",{parentName:"ul"},"Wl,\u2013gc-sections: recycles unused sections during linking.")),(0,o.kt)("p",null,"After the compilation is complete, the c_runtime file is created under the current directory. Copy the hhb.bm file and the cat.jpg image that are generated by incorporating the hhb command and the c_runtime file to the development board of C910 to execute at a time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./c_runtime hhb.bm cat.jpg\n")),(0,o.kt)("p",null,"You can view the top 5 execution results on the terminal. "),(0,o.kt)("h2",{id:"shl"},"SHL"),(0,o.kt)("p",null,"SHL, previously called CSI-NN2,  is a neural network acceleration library."),(0,o.kt)("p",null,"It abstracts various common neural network operators to form unified interfaces. SHL also implements an acceleration library for XuanTie CPU. This interface offers optimization code at the assembly level for the RISC-V Vector extension. The acceleration library has adapted to multiple data types of quantization schemes."),(0,o.kt)("p",null,"Combined with the automatic quantization function of HHB, SHL can quickly change the original model from the single-precision floating-point data type to optimal. As a result,the model can deliver the best performance on the development board."),(0,o.kt)("p",null,"The source code of SHL has been made available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/T-head-Semi/csi-nn2"},"GitHub"),"."),(0,o.kt)("p",null,"SHL shares the specifications of RISCV-V Vector extension V0.7.1 in the implementation of the neural network operator on XuanTie C910. Considering the features of the CPU hardware (such as pipeline dependence, branch prediction, or cache), SHL fully excavates the parallel capabilities of the fp16 data format in the algorithm."),(0,o.kt)("p",null,"To balance performance and accuracy, some SoCs may have an NPU to accelerate some int8 neural network operators. SHL provides one reference schedule module to find the best processor for  operators."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"graph opt",src:a(1601).Z,width:"1202",height:"610"})),(0,o.kt)("h1",{id:"c910-performance"},"C910 Performance"),(0,o.kt)("p",null,"XuanTie C910 is a 64-bit high-performance processor based on the 64-bit RISC-V architecture. This processor adopts a state-of-the-art 12-stage and out-of-order multiple issue superscalar pipeline. On TH1520, it can clock up to 2.5GHz. It is also equipped with 128-bit vector operation units to deliver optimized performance. "),(0,o.kt)("p",null,"The vector operation units of XuanTie C910 are designed following version 0.7.1 of RISC-V Vector Extension. C910 supports wide-ranging data formats, including int8, int16, int32, int64, bf16, fp16, fp32, and fp64. fp16 is the default format for deploying network models, with which Xuantie C910 can achieve its best performance."),(0,o.kt)("p",null,"We have tested various typical image classification models. The table below presents the performance of our deployment software on C910 at 1.85 GHz."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"c910 perf",src:a(7633).Z,width:"1238",height:"406"})),(0,o.kt)("p",null,"As a comparison, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/XNNPACK"},"XNNPACK")," costs 77ms (multi-threaded) to infer a MobileNet model on Raspberry Pi 4B."),(0,o.kt)("h1",{id:"c910-and-npu"},"C910 and NPU"),(0,o.kt)("p",null,"In order to accelerate the convolution operator in the neural network, TH1520 is equipped with a 4-TOPS NPU. The NPU can also expedite more than 20 other operators in the neural network under int8."),(0,o.kt)("p",null,"The table below presents the performance of combining C910 and NPU to access typical image classification models:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"npu perf",src:a(2801).Z,width:"1178",height:"320"})),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This article describes in details on how to deploy a neural network model on TH1520, We have also presented optimal performance of TH1520 in basic image classification tasks."),(0,o.kt)("p",null,"TH1520 has already been incorporated inside Alibaba\u2019s ecosystem, which demonstrates the feasibility of RISC-V-based high-performance devices to deploy neural network models. In addition, the source code of deployment tools, HHB and SHL, has been open-sourced and shared on GitHub."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.xrvm.com/"},"Read more details related to the hardware and software.")))}d.isMDXComponent=!0},7997:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ali135-b3fcec4e8dbd3972a20aafcc21b3cde0.png"},1601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ali136-73a2f322deb96fd8df1252539baab274.png"},7633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ali138-2ba85047243dc356868ada350815adcd.png"},2801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ali139-ee83d8b897492361bbc070ea55945ac9.png"}}]);