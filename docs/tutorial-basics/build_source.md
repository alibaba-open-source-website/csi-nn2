---
sidebar_position: 2
---

# Build from source

download source code
SHL  source code has been published on github

``` Bash
git clone https://github.com/T-head-Semi/csi-nn2.git
cd csi-nn2
```

compile x86 reference

``` Bash
make nn2_ref_x86
compile C906 optimization
```

Download T-Head gcc [2.6.1](https://github.com/T-head-Semi/csi-nn2/releases/download/v2.0.20/Xuantie-900-gcc-linux-5.10.4-glibc-x86_64-V2.6.1-20220906.tar.gz) from Github，after decompress and set the path.

``` Bash
make nn2_c906
```
