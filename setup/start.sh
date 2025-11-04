#! /bin/bash

asd &&
code-server \
    --auth none \
    --bind-addr 0.0.0.0:7081 \
    --disable-telemetry \
    --app-name "Aerospike Education" \
    --disable-getting-started-override \
    /home/aero_edu/.local/share/code-server/User/Workspaces/vest-vault.code-workspace &&
exec "$@"
