# GROUP38
Repository for my second demo work
ansible/
├── group_vars/
│   └── all.yml                # Global variables (e.g., user credentials, repo URL)
├── host_vars/
│   └── app1.yml               # Variables specific to app1 (e.g., app directory, app port)
├── roles/
│   ├── install_nodejs/
│   │   └── tasks/
│   │       └── main.yml       # Install Node.js
│   ├── install_mongodb/
│   │   └── tasks/
│   │       └── main.yml       # Install MongoDB
│   ├── deploy_app/
│   │   └── tasks/
│   │       └── main.yml       # Deploy app files and install dependencies
│   ├── configure_nginx/
│   │   └── tasks/
│   │       └── main.yml       # Configure Nginx reverse proxy
├── inventory.ini             # Inventory of your servers (app1, etc.)
└── main.yml                  # Main playbook file
