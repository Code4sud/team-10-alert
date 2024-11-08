




import SwiftUI



struct LoginView: View {
    
    @StateObject private var viewModel = LoginViewModel()
    
    var body: some View {
        switch viewModel.currentPage {
        case .login:
            LoginContent(viewModel: viewModel)
        case .register:
            RegisterView(viewModel: viewModel)
        case .createProfile:
            CreateProfileView(viewModel: viewModel)
        case .map:
            MapView()
        case .chooseChar:
            ChooseCharacterView(viewModel: viewModel)
        }
    }
}

struct LoginContent: View {
    
    @StateObject var viewModel : LoginViewModel
    
    var body: some View {
            ZStack {
                BackgroundView()

                VStack(alignment: .center) {
                    Text("Se connecter")
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

                    Spacer().frame(height: 110)

                    CustomButton(text: "Se connecter") {
                        viewModel.currentPage = .chooseChar
                    }
                    
                    Spacer().frame(height: 70)

                    Text("Vous ne disposez pas de compte ? ")
                        .foregroundStyle(.white)
                        .font(.system(size: 14))
                        .padding(.bottom, 4)

                        Text("Créez-en un !")
                            .foregroundStyle(Color(.secondary))
                            .font(.system(size: 16))
                            .bold()
                            .onTapGesture {
                                viewModel.currentPage = .register
                            }
                    

                }.padding(.horizontal, 35)
            }

    }
}


#Preview {
    LoginView()
}
