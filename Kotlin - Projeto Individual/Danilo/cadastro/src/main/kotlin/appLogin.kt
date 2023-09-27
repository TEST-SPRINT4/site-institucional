import javax.swing.JOptionPane
fun main(){
    var usuario1 = Usuario()
    JOptionPane.showMessageDialog(null, "Entre com suas credenciais")
    usuario1.login = JOptionPane.showInputDialog(null,"informe seu login")
    usuario1.senha = JOptionPane.showInputDialog(null,"informe sua senha")
JOptionPane.showMessageDialog(null,"Bem vindo ${usuario1.login}")
}

