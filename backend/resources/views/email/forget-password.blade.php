<!DOCTYPE html>
<html>
<head>
    <title>Reset Password</title>
</head>
<body>
    <p>Hi,</p>

    
    <p>Click the link below to reset your password:</p>
    <a href="{{ url('http://localhost:3000/auth/reset-password?token='.$token) }}">reset your password:</a>
</body>
</html>
