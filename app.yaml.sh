#!/bin/bash
echo """
runtime: nodejs
env: standard
service: $GCLOUD_APP_SERVICE
resources:
  cpu: 2
  memory_gb: 2.3
  disk_size_gb: 10
"""