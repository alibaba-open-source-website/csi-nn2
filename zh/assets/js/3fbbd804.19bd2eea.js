"use strict";(self.webpackChunkcsi_nn_2=self.webpackChunkcsi_nn_2||[]).push([[2652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={slug:"MLPerf Tiny",title:"XuanTie C906 Tops MLPerf Tiny v0.7 Benchmark",authors:"zhangwm",tags:["D1","C906"]},r=void 0,s={permalink:"/zh/blog/MLPerf Tiny",editUrl:"https://github.com/alibaba-open-source-website/easyexcel/tree/main/blog/2022-06-13-mlperf-tiny/index.md",source:"@site/blog/2022-06-13-mlperf-tiny/index.md",title:"XuanTie C906 Tops MLPerf Tiny v0.7 Benchmark",description:"XuanTie C906 is a processor developed by Alibaba Cloud based on the RISC-V instruction set architecture. It has attained top marks in the most recent findings from MLPerf Tiny v0.7, an AI benchmark focusing on IoT devices. The performance of XuanTie C906 excelled in all four core categories: Visual Wake Words (VWW), Image Classifications (IC), Keyword Spotting (KWS), and Anomaly Detection (AD).",date:"2022-06-13T00:00:00.000Z",formattedDate:"2022\u5e746\u670813\u65e5",tags:[{label:"D1",permalink:"/zh/blog/tags/d-1"},{label:"C906",permalink:"/zh/blog/tags/c-906"}],readingTime:4.195,hasTruncateMarker:!1,authors:[{name:"Wenmeng Zhang",title:"Engineer @ T-Head",url:"https://github.com/zhangwm-pt",imageURL:"https://github.com/zhangwm-pt.png",key:"zhangwm"}],frontMatter:{slug:"MLPerf Tiny",title:"XuanTie C906 Tops MLPerf Tiny v0.7 Benchmark",authors:"zhangwm",tags:["D1","C906"]},prevItem:{title:"XuanTie C908 Accelerates AI with Software and Hardware Fusion",permalink:"/zh/blog/C908 accelerates AI"}},l={authorsImageUrls:[void 0]},c=[{value:"About MLPerf Tiny",id:"about-mlperf-tiny",level:2},{value:"XuanTie C906 with the RISC-V Vector Extension",id:"xuantie-c906-with-the-risc-v-vector-extension",level:2},{value:"Software Stack",id:"software-stack",level:2},{value:"CSI-NN2",id:"csi-nn2",level:3},{value:"HHB",id:"hhb",level:3},{value:"Sinian",id:"sinian",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"XuanTie C906 is a processor developed by Alibaba Cloud based on the RISC-V instruction set architecture. It has attained top marks in the most recent findings from ",(0,i.kt)("a",{parentName:"p",href:"https://mlcommons.org/en/inference-tiny-07/"},"MLPerf Tiny v0.7"),", an AI benchmark focusing on IoT devices. The performance of XuanTie C906 excelled in all four core categories: Visual Wake Words (VWW), Image Classifications (IC), Keyword Spotting (KWS), and Anomaly Detection (AD)."),(0,i.kt)("h2",{id:"about-mlperf-tiny"},"About MLPerf Tiny"),(0,i.kt)("p",null,"MLPerf Tiny Inference is a benchmark developed by MLCommons. It is designed to measure the efficiency of processing new data by a trained neural network for extremely low-power devices., as well as providing an optional power measurement test."),(0,i.kt)("p",null,"The benchmark consists of four machine learning tasks that involve using microphone and camera sensors within embedded devices",(0,i.kt)("sup",null,"1"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keyword Spotting (KWS):  a feature that utilizes a neural network to detect keywords from a spectrogram"),(0,i.kt)("li",{parentName:"ul"},"Visual Wake Words (VWW): a binary image classification task to determine the presence of a person in an image"),(0,i.kt)("li",{parentName:"ul"},"Tiny Image Classification (IC):  a small image classification benchmark with 10 classes"),(0,i.kt)("li",{parentName:"ul"},"Anomaly Detection (AD): uses a neural network to identify abnormalities in machine operating sounds")),(0,i.kt)("p",null,"The image below details the results."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"res",src:n(238).Z,width:"1876",height:"940"})),(0,i.kt)("h2",{id:"xuantie-c906-with-the-risc-v-vector-extension"},"XuanTie C906 with the RISC-V Vector Extension"),(0,i.kt)("p",null,"XuanTie C906 is a 64-bit high-energy processor based on a 64-bit RISC-V architecture. This processor is designed with a five to eight stage integer pipeline. It is also equipped with 128-bit vector operation units to deliver excellent performance. Not only does XuanTie C906 adopt a multi-channel and mode data prefetching technologies, it improves and optimizes data access bandwidth and prefetching."),(0,i.kt)("p",null,"The vector operation units of XuanTie C906 are designed to follow the specifications of RISC-V Vector extension V0.7.1. Data formats, including int8, int16, int32, int64, bf16, fp16, fp32, and fp64, are supported. In the benchmark we have used f16 as the default, with which Xuantie C906 achieved the best performance."),(0,i.kt)("p",null,"The XuanTie C906 silicon chip is used in Allwinner SoC D1, which has been put into full-scale production. Allwinner D1 has been embedded in various development boards and is available in the open market."),(0,i.kt)("h2",{id:"software-stack"},"Software Stack"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"stack",src:n(5835).Z,width:"1966",height:"330"})),(0,i.kt)("p",null,"As shown in the preceding flowchart, the original model is obtained from MLPerf Tiny. An optional next step is to then be compressed by Sinian. Subsequently, Heterogeneous Honey Badger (HHB) converts the model to function library calls which are supported by the CSI-NN2 API. CSI-NN2 finally implements neural network interfaces by using the vector operation units of XuanTie C906."),(0,i.kt)("h3",{id:"csi-nn2"},"CSI-NN2"),(0,i.kt)("p",null,"CSI-NN2 is a set of API interfaces for neural network acceleration libraries. It abstracts various common neural network operators to form unified interfaces."),(0,i.kt)("p",null,"CSI-NN2 also implements an acceleration library for XuanTie CPU. This interface provides optimization code at the assembly level for the RISC-V Vector extension. The acceleration library has adapted to multiple data types of quantization schemes."),(0,i.kt)("p",null,"Combined with the automatic quantization function of HHB, CSI-NN2 can quickly change the original model from the single-precision floating-point data type to optimal so that the model can deliver the best performance on the development board."),(0,i.kt)("p",null,"The source code of CSI-NN2 has been made available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/T-head-Semi/csi-nn2"},"GitHub"),"."),(0,i.kt)("p",null,"CSI-NN2 shares the specifications of RISCV-V Vector extension V0.7.1 in the implementation of neural network operator on XuanTie C906. Considering the features of the CPU hardware (such as pipeline dependence, branch prediction, or cache), CSI-NN2 fully excavates the parallel capabilities of the fp16 data format in the algorithm."),(0,i.kt)("h3",{id:"hhb"},"HHB"),(0,i.kt)("p",null,"HHB is a collection of tools provided by T-Head to deploy neural network models on XuanTie processors. These tools can be incorporated for compilation, profiling, and simulation. The framework is based on Apache TVM, which is an end-to-end machine learning compiler structure. "),(0,i.kt)("p",null,"The source code of HHB has been shared on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/T-head-Semi/tvm"},"GitHub"),"."),(0,i.kt)("p",null,"HHB supports the network model formats of Caffe, TensorFlow, ONNX, and TensorFlow Lite. It can convert these model formats into unified intermediate expressions for graphing performance optimization. "),(0,i.kt)("p",null,"In addition, HHB supports multiple quantization methods to handle various data types. This framework can automatically provide the optimal  scheme for the specified XuanTie CPU platform. After quantization, HHB generates a graph structure in C code from the intermediate expression. Each node of the graph structure is constructed by calling the CSI-NN2 API."),(0,i.kt)("p",null,"As a common deployment tool set, HHB can also access the original model in the benchmark with the following performance:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"perf",src:n(1898).Z,width:"808",height:"298"})),(0,i.kt)("h3",{id:"sinian"},"Sinian"),(0,i.kt)("p",null,"Sinian is a computing acceleration platform for neural network models. It utilizes technologies for model compression such as network structure search and knowledge distillation."),(0,i.kt)("p",null,"In the benchmark, Sinian has reduced the calculation workload of every model by three to eight times."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This article describes the results the XuanTie C906 attained in the MLPerf Tiny v0.7 benchmark in terms of performance. XuanTie C906 implements the specifications of RISC-V Vector extension V0.7.1. It has been put into scale production and is available on ",(0,i.kt)("a",{parentName:"p",href:"https://sipeed.aliexpress.com/store/group/RISC-V/1101739727_10000003584258.html?spm=a2g0o.store_pc_home.smartGrouping_6001928813303.10000003584258"},"AliExpress"),". In addition, the source code of CSI-NN2 and HHB have been open sourced and shared on GitHub."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://occ.t-head.cn/"},"Read more details related to the hardware and software.")),(0,i.kt)("p",null,"References:\n","[1]"," MLPerf Tiny Inference Benchmark. from: ",(0,i.kt)("a",{parentName:"p",href:"https://mlcommons.org/en/news/mlperf-tiny-v05/"},"https://mlcommons.org/en/news/mlperf-tiny-v05/")))}u.isMDXComponent=!0},238:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ali1-1-60d4957d7a6009cd19cead98223a2b62.png"},5835:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ali2-82a17c007815bae1e66cdb99ced708c2.png"},1898:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ali3-c71c23fa46827bd23820923b687b9601.png"}}]);