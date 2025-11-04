#! /bin/bash

[ -s ${NVM_DIR}/nvm.sh ] && \. ${NVM_DIR}/nvm.sh &&
[ -s ${NVM_DIR}/bash_completion ] && \. ${NVM_DIR}/bash_completion &&
cd $HOME/projects/website &&
nohup yarn preview --host 0.0.0.0 --port 7080 &
