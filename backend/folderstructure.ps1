# Create the src folder and its subdirectories
mkdir src
cd src
mkdir config, controllers, middleware, models, routes, services, utils, validations

# Create files under src/config
cd config
New-Item -Path . -Name "db.js" -ItemType "file"
New-Item -Path . -Name "jwt.js" -ItemType "file"
cd ..

# Create files under src/controllers
cd controllers
New-Item -Path . -Name "authController.js" -ItemType "file"
New-Item -Path . -Name "logController.js" -ItemType "file"
New-Item -Path . -Name "userController.js" -ItemType "file"
cd ..

# Create files under src/middleware
cd middleware
New-Item -Path . -Name "authMiddleware.js" -ItemType "file"
New-Item -Path . -Name "logMiddleware.js" -ItemType "file"
cd ..

# Create files under src/models
cd models
New-Item -Path . -Name "logModel.js" -ItemType "file"
New-Item -Path . -Name "userModel.js" -ItemType "file"
cd ..

# Create files under src/routes
cd routes
New-Item -Path . -Name "authRoutes.js" -ItemType "file"
New-Item -Path . -Name "logRoutes.js" -ItemType "file"
New-Item -Path . -Name "userRoutes.js" -ItemType "file"
cd ..

# Create files under src/services
cd services
New-Item -Path . -Name "authService.js" -ItemType "file"
New-Item -Path . -Name "logService.js" -ItemType "file"
cd ..

# Create files under src/utils
cd utils
New-Item -Path . -Name "logger.js" -ItemType "file"
cd ..

# Create files under src/validations
cd validations
New-Item -Path . -Name "authValidation.js" -ItemType "file"
New-Item -Path . -Name "logValidation.js" -ItemType "file"
cd ..

# Create app.js and server.js in src
cd ..
New-Item -Path . -Name "app.js" -ItemType "file"
New-Item -Path . -Name "server.js" -ItemType "file"

# Go back to the main project folder and create tests and docs folders
mkdir tests, docs

# Create test files
cd tests
New-Item -Path . -Name "log.test.js" -ItemType "file"
New-Item -Path . -Name "auth.test.js" -ItemType "file"
cd ..

# Done!
