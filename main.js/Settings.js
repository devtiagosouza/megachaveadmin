const cApplicationID = "g8jGp3RWnPZFof6pDwZh01iDm3U2ewjCn7XeKnlv";
const cRestAPIkey = "BXOEr2mcRlyyi5CvW7u137rO8otrJ3Rej9lEO1SM";
const cJavaScriptAPIKey  = "N2Ua5UsFgB6zAbxuZCRIizRaTNlPqcSycaMD6wNI";
const cMasterKey = "4B6EQofv034Y8Y8rZSqyEQvoppKiZHMes9sVXuaX";
const cServerUrl = "https://parseapi.back4app.com/";
var sessionToken = "";

const RestApiHeaders = function(xhr) {
                        xhr.setRequestHeader('X-Parse-Application-Id', cApplicationID);
                        xhr.setRequestHeader('X-Parse-REST-API-Key',cRestAPIkey);
};

Parse.serverURL = cServerUrl;
const cUsuariosUrl = `${cServerUrl}/classes/Usuarios`;
const CFuncionName = 'userExists';


function DefaultErrorPlacement(label, element) {
    label.addClass('mt-2 text-danger');
    label.insertAfter(element);
  };
function DefaultHighlight(element, errorClass) {
          $(element).parent().addClass('has-danger')
          $(element).addClass('form-control-danger')
  };

var RulesLoginNovaSenha =
        {
             xLoginNovaSenha : 
             {
                minlength : 6,
                required : true
             },
             xLoginConfirmaSenha :
             {
                 equalTo: "#txtLoginNovaSenha"
             }
        };
var MessagesLoginNovaSenha =
        {
              xLoginNovaSenha : {
                      required : 'Defina uma senha de acesso',
                      minlength : jQuery.validator.format("a senha deve ter pelo menos {0} caracteres!")
              },
              xLoginConfirmaSenha : {
                      equalTo : "A confirmação de senha deve ser igual a senha definida no campo acima"
              }
        };

var RulesLogin = 
[ 
        
        {
          xLoginUsuario : {
                  required : true,
                  minlength : 5,
                  email : true
          },
          xLoginSenha : {
                  required : true,
          }
        },
        {
            xLoginUsuario : {
                      required : 'Digite o E-mail',
                      minlength : jQuery.validator.format("O E-mail deve ter pelo menos {0} caracteres!"),
                      email: "O endereço de e-mail deve estar no formado xxxx@meganews.com.br"
              },
              xLoginSenha : {
                      required : 'Digite a senha'
                      
                      
              }
        }

]
