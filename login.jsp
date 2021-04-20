<!DOCTYPE html>  
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8" />
    <title>Login</title>
    <link rel="shortcut icon" href="../Immagini/Zip12Logo.png">
    <!--<link rel="stylesheet" href="../style.css" />-->
</head>

<body>
    <table style="background-color: transparent" border="0" width="100%">
        <tr height="80">

            <td width="5%"></td>

            <td width="10%" align="right"><button type="button" class="button-style" onclick="window.close();">Home</button></td>

            <td width="70%" align="center"><img src="..\Immagini\zip-logo-imm.png" height="115" /></td>

            <td width="12%"><button type="button" class="button-style" onclick="location.href = 'chiSiamo.html';">Chi siamo</button></td>

            <td width="3%"></td>
        </tr>
    </table>


    <script type="text/javascript" src="../JS/home.js"></script>
    <script type="text/javascript" src="../JS/actions.js"></script>
    <link rel="stylesheet" href="logincss.css" />

    <table align="center" style="width: 60%;">
        <tr>
            <td>
                <div class="login-container" align="center">
                <form autocomplete="off">
                    <h1>Login</h1>
                    
                    <!------------------------------------inserimento utente------------------------------->
                    <label style="color:white; font-size: 23px"><b> Utente </b> </label>
                    <br />
                    <input style="width: 85%;" type="text" name="utente" placeholder="Utente" id="namField" size="15" required />
                    <!-----------------------------------inserimento password------------------------------>
                    <br />
                    <label for="psw" style="color:white; font-size: 23px"><b>Password</b></label>
                    <br />
                    <input style="width: 85%" type="password" placeholder="Inserisci Password" name="psw" id="psw" required>
                    <!-----------------------------------tasto registrazione------------------------------->
                    <br />
                    <button type="submit" class="button-style" style="width: 20%"><b>Accedi</b></button>
                    <p style="font-size: 22px"> Non hai ancora un account? <a href="registrazione.html" id="gotoReg">Clicca qui</a></p>
                </form>
        </div>
            </td>
        </tr>
    </table>
    
    <!--<script type="text/javascript" src="vanilla-tilt.js"></script>

    <script type="text/javascript">
        VanillaTilt.init(document.querySelectorAll(".login-container"), {
            max: 18,
            speed: 800,
            glare: true,
            "max-glare": 0.2,
            perspective: 1000
        });
        
        //It also supports NodeList
        VanillaTilt.init(document.querySelectorAll(".your-element"));
    </script>-->

</body>
</html>  