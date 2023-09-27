import javax.swing.JOptionPane
import java.util.Scanner

fun main() {
    var usuario1 = Cadastro()

    print("Faça seu cadastro \r\n")

    var nome1 = JOptionPane.showInputDialog("Insira seu nome").toString()
    var email1 = JOptionPane.showInputDialog("Coloque seu email").toString()
    var senha1 = JOptionPane.showInputDialog("Crie sua senha").toString()


    usuario1.nome = nome1
    email1 = usuario1.email
    senha1 = usuario1.senha


    print("Seja bem vindo $nome1")
}