"use strict";(self.webpackChunkcsi_nn_2=self.webpackChunkcsi_nn_2||[]).push([[6413],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={slug:"RVM example",title:"RISC-V matrix extension example",authors:"shaowg",tags:["matrix extension","example"]},o=void 0,l={permalink:"/blog/RVM example",editUrl:"https://github.com/alibaba-open-source-website/easyexcel/tree/main/blog/2023-02-01-rvm-example/index.md",source:"@site/blog/2023-02-01-rvm-example/index.md",title:"RISC-V matrix extension example",description:"In order to enhance the AI inference ability of the Xuantie processor, T-Head propose a matrix extension Instruction set. The following is an example of AI inference introduced through the T-Head open source AI deployment package.",date:"2023-02-01T00:00:00.000Z",formattedDate:"February 1, 2023",tags:[{label:"matrix extension",permalink:"/blog/tags/matrix-extension"},{label:"example",permalink:"/blog/tags/example"}],readingTime:4.405,hasTruncateMarker:!1,authors:[{name:"Wengan Shao",title:"Engineer @ T-Head",url:"https://github.com/shaowg",imageURL:"https://github.com/shaowg.png",key:"shaowg"}],frontMatter:{slug:"RVM example",title:"RISC-V matrix extension example",authors:"shaowg",tags:["matrix extension","example"]},nextItem:{title:"How to Deploy a Neural Network on TH1520",permalink:"/blog/deploy on th1520"}},s={authorsImageUrls:[void 0]},c=[{value:"1 docker",id:"1-docker",level:2},{value:"2 Model deployment",id:"2-model-deployment",level:2},{value:"2.1 Model compilation",id:"21-model-compilation",level:3},{value:"2.2 SHL library",id:"22-shl-library",level:3},{value:"2.2 Executable program",id:"22-executable-program",level:3},{value:"3 Simulate",id:"3-simulate",level:2},{value:"4 Other",id:"4-other",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to enhance the AI inference ability of the Xuantie processor, T-Head propose a matrix extension Instruction set. The following is an example of AI inference introduced through the T-Head open source AI deployment package."),(0,i.kt)("h2",{id:"1-docker"},"1 docker"),(0,i.kt)("p",null,"Pull the image hhb:2.1-matrix that supports matrix extension from ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"docker hub"),", start a container, and open a terminal in interactive mode in the container:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'docker pull hhb4tools/hhb:2.1-matrix\ndocker run -itd --name=your.hhb2.1-matrix -p 22 -v /your_mount_dir/:/mnt "hhb4tools/hhb:2.1-matrix"\ndocker exec -it your.hhb2.1-matrix /bin/bash\n')),(0,i.kt)("p",null,"After entering container, you can use the hhb --version command to confirm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root@c14249f8243c:/# hhb --version\nHHB version: 2.1.x-matrix, build 20230131\n")),(0,i.kt)("p",null,"docker installation guide\uff1a"),(0,i.kt)("h2",{id:"2-model-deployment"},"2 Model deployment"),(0,i.kt)("p",null,"Take the deployment of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shicai/MobileNet-Caffe"},"MobileNet")," as an example, in /home/rvm_caffe_mv1_int8, there is already a complete Makefile script, execute the  ",(0,i.kt)("inlineCode",{parentName:"p"},"make"),"  command to convert the model into the required sample program, which can be executed on RISC-V architecture chips that support matrix extension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /home/rvm_caffe_mv1_int8\nmake\n")),(0,i.kt)("p",null,"The key steps in the model deployment process are described below:"),(0,i.kt)("h3",{id:"21-model-compilation"},"2.1 Model compilation"),(0,i.kt)("p",null,"HHB is an offline AI model compilation and optimization tool. Executing the following commands can quantize the original model, optimize operators such as operator fusion, and generate a C code model with high execution efficiency on the target chip."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hhb -C --calibrate-dataset ./cat.jpg --model-file ./mobilenetv1.prototxt ./mobilenetv1.caffemodel --data-scale 0.017 --data-mean '104 117 124' --output . --board rvm --quantization-scheme=\"int8_asym_w_sym\" --pixel-format BGR --fuse-conv-relu --channel-quantization --target-layout NHWC\n")),(0,i.kt)("p",null,"The model compilation options are described as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"-C \uff1aspecifies to execute the main command until C code is generated."),(0,i.kt)("li",{parentName:"ul"},"--calibrate-dataset\uff1aspecifies the calibration image used for quantization."),(0,i.kt)("li",{parentName:"ul"},"--model-file \uff1aspecifies a MobileNet model downloaded to the current directory. A Caffe model is divided into two files. The files following the option are not sequence-sensitive."),(0,i.kt)("li",{parentName:"ul"},"--data-mean \uff1aspecifies a mean."),(0,i.kt)("li",{parentName:"ul"},"--data-scale \uff1aspecifies a scale."),(0,i.kt)("li",{parentName:"ul"},"--output \uff1aspecifies the current directory as the path to store files that you need to generate."),(0,i.kt)("li",{parentName:"ul"},"--board \uff1aspecifies the platform as the destination platform."),(0,i.kt)("li",{parentName:"ul"},"--quantization-scheme \uff1aspecifies a quantization scheme. "),(0,i.kt)("li",{parentName:"ul"},"--pixel-format\uff1aspecifies the input image format required by the model, the default is RGB, and the BGR image needs to be set to BGR when the model is trained."),(0,i.kt)("li",{parentName:"ul"},"--fuse-conv-relu\uff1aspecifies relu fuse to convolution layer."),(0,i.kt)("li",{parentName:"ul"},"-channel-quantization\uff1aspecifies weight channel quantization."),(0,i.kt)("li",{parentName:"ul"},"--target-layout NHWC\uff1aspecifies the tensor layout.")),(0,i.kt)("p",null,"After the command is executed, multiple files such as main.c and model.c will be generated in the current directory:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"data.0.tensor\uff1a cat.png preprocessed tensor by decoding."),(0,i.kt)("li",{parentName:"ul"},"data.0.bin\uff1adata.0.tensor binary data."),(0,i.kt)("li",{parentName:"ul"},"main.c\uff1athe reference entry to the sample program."),(0,i.kt)("li",{parentName:"ul"},"model.c\uff1aa model structure file that describes the model structure."),(0,i.kt)("li",{parentName:"ul"},"hhb.bm\uff1aHHB format model file."),(0,i.kt)("li",{parentName:"ul"},"model.params\uff1athe weights converted to int8."),(0,i.kt)("li",{parentName:"ul"},"io.c\uff1athe helper function for reading and writing files."),(0,i.kt)("li",{parentName:"ul"},"io.h\uff1athe declaration of the helper function for reading and writing files."),(0,i.kt)("li",{parentName:"ul"},"process.c\uff1athe image preprocessing function."),(0,i.kt)("li",{parentName:"ul"},"process.h\uff1athe declaration of the image preprocessing function.")),(0,i.kt)("h3",{id:"22-shl-library"},"2.2 SHL library"),(0,i.kt)("p",null,"SHL is a set of neural network library API for Xuantie CPU platform, and provides a series of optimized binary libraries. SHL supports convolutional layer-focused optimization by matrix extension, . In this example, the prebuilt inference library has been placed in the /home/install_nn2 directory, and the source code can also be downloaded and rebuild by the following steps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone -b matrix https://github.com/T-head-Semi/csi-nn2.git\ncd csi-nn2\nmake nn2_rvm\nmake install\n")),(0,i.kt)("h3",{id:"22-executable-program"},"2.2 Executable program"),(0,i.kt)("p",null,"After hhb completes the code generation, execute the following compilation command to link the rvm high-performance library and generate the c_runtime program in the current directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"riscv64-unknown-linux-gnu-gcc -O2 -g3 -march=rv64gcv_zfh_xtheadc -mabi=lp64d -I/home -I/home/install_nn2/include -I/home/decode/install/include -o c_runtime  main.c model.c io.c process.c -L/home/install_nn2/lib -L/home/decode/install/lib/rv -ljpeg -lpng -lz -lstdc++ -lshl_rvm -lm -static -Wl,--gc-sections\n")),(0,i.kt)("p",null,"The compilation option is described as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"-O2 -g3: specifies the optimization option and debug-level."),(0,i.kt)("li",{parentName:"ul"},"-march: specifies the architecture option for RISC-V matrix extension chip."),(0,i.kt)("li",{parentName:"ul"},"-mabi: specifies the application binary interface (ABI) option for RISC-V matrix extension chip."),(0,i.kt)("li",{parentName:"ul"},"-I: specifies the location of the header file that needs to be used during compilation."),(0,i.kt)("li",{parentName:"ul"},"main.c model.c io.c process.c: the source file that you need to use for compilation."),(0,i.kt)("li",{parentName:"ul"},"-L: specifies the path to store the specified library."),(0,i.kt)("li",{parentName:"ul"},"-ljpeg: links to a JPEG decoding library."),(0,i.kt)("li",{parentName:"ul"},"-lpng: links to a PNG decoding library."),(0,i.kt)("li",{parentName:"ul"},"-lz: links to a zlib."),(0,i.kt)("li",{parentName:"ul"},"-lstdc++: links to a standard C++ library."),(0,i.kt)("li",{parentName:"ul"},"-lshl_rvm: links to an optimized version library of rvm in SHL."),(0,i.kt)("li",{parentName:"ul"},"-lm: links to a standard math library."),(0,i.kt)("li",{parentName:"ul"},"-static: a static link."),(0,i.kt)("li",{parentName:"ul"},"-Wl,--gc-sections: recycles unused sections during linking.")),(0,i.kt)("p",null,"The gcc version used in this example is V2.6.1, you can use the following command to check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"riscv64-unknown-linux-gnu-gcc -v\n")),(0,i.kt)("h2",{id:"3-simulate"},"3 Simulate"),(0,i.kt)("p",null,"After the compilation is complete, use T-Head's qemu simulation program to execute, and you can see the top5 execution results on the terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qemu-riscv64 -cpu  rv64,x-v=true,vext_spec=v1.0,vlen=128,x-matrix=on,mlen=128 c_runtime model.params data.0.bin\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2023/png/330274/1675153172385-5bf1da34-1ba2-4549-9620-f266e733660c.png#clientId=ua527e72f-b31b-4&from=paste&height=407&id=KD9lI&name=image.png&originHeight=488&originWidth=1291&originalType=binary&ratio=1&rotation=0&showTitle=false&size=215314&status=done&style=none&taskId=u50db042f-2f84-4107-9d4f-6a137e9b30c&title=&width=1075.8332905835593",alt:"image.png"}),"\nThe qemu version used in this example is V6.0.94, you can use the following command to check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qemu-riscv64 -version\n")),(0,i.kt)("h2",{id:"4-other"},"4 Other"),(0,i.kt)("p",null,"RISC-V matrix extension also supports fp16 data type, just modify the hhb compilation command as follows, and keep other steps unchanged, you can use fp16 for inference."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"hhb -C --calibrate-dataset ./cat.jpg --model-file ./mobilenetv1.prototxt ./mobilenetv1.caffemodel \n--data-scale 0.017 --data-mean '104 117 124' --output . --board rvm --quantization-scheme=\"float16\" \n--pixel-format BGR --target-layout NHWC\n")))}p.isMDXComponent=!0}}]);