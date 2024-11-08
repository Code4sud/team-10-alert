//
//  AlertView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI


struct Alert : View {
    
    @StateObject private var viewModel = AlertViewModel()
    var onClose: () -> Void

    var body: some View {
        switch viewModel.currentPage {
        case .alert:
            AlertView(viewModel: viewModel)
        case .todo:
            TodoView(viewModel: viewModel){
                onClose()
            }
        }
    }
}


struct AlertView: View {
    
    @StateObject var viewModel : AlertViewModel

    var body: some View {
        ZStack {
            Color.red.opacity(0.5)
                .frame(height: UIScreen.main.bounds.height * 1.1)
                .clipped()
                .blur(radius: 12)

            
            VStack {
                VStack(alignment: .center,spacing: 20){
                    Text("Alerte Danger !")
                        .font(.largeTitle)
                        .fontWeight(.heavy)
                        .foregroundColor(Color(.red))
                        .padding(.top, 20)
                    Image("noun-alert-6093835 1")
                    Text("Attention")
                        .font(.title)
                        .fontWeight(.black)
                        .foregroundColor(Color(.white))
                    Text("Ceci est une alerte réelle et non un exercice. Veuillez suivre les instructions de sécurité et rester vigilant.")
                        .foregroundColor(.white)
                        .font(.system(size:24, weight: .regular))
                    CustomButton(text: "Liste d'actions") {
                        viewModel.currentPage = .todo
                    }
                    .padding(.bottom)
                        
                }
                .padding()
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .fill(Color(.primary))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.white, lineWidth: 1)
                )
            }
            .padding()
        }
        .shadow( color: Color(.secondary).opacity(0.4), radius: 12)
        
    }
}

#Preview {
    @Previewable @StateObject var viewModel = AlertViewModel()
    Alert(){}
}
