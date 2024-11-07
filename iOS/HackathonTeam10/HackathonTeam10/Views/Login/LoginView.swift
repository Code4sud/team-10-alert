




import SwiftUI

struct LoginView: View {
    var body: some View {

        ZStack {
            BackgroundView()

            VStack(alignment: .center) {
                Text("Se conecter")
                    .foregroundStyle(.white)
                    .font(.system(size: 32))
                    .bold()

                Spacer().frame(height: 80)

                CustomTextField(
                    text:"",
                    placeholder: "Saisissez votre adresse mail",
                    title: "Adresse mail"
                )
                Spacer().frame(height: 30)

                CustomTextField(
                    text:"",
                    placeholder: "Saisissez votre adresse mail",
                    title: "Mot de passe",
                    secure: true
                )

                Text("Mot de passe oublié?")
                    .foregroundStyle(Color(.secondary))
                    .frame(maxWidth: .infinity, alignment: .trailing)
                    .multilineTextAlignment(.trailing)
                    .padding(.top, 10)

                Spacer().frame(height: 112)


                Text("Vous ne disposez pas de compte ? ")
                    .foregroundStyle(.white)
                    .font(.system(size: 14))
                    .padding(.bottom, 4)

                Text("Créez-en un !")
                    .foregroundStyle(Color(.secondary))
                    .font(.system(size: 16))
                    .bold()

            }.padding(.horizontal, 35)
        }
    }
}


#Preview {
    LoginView()
}
