//
//  ToDoView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct TodoView: View {
    
    @StateObject var viewModel : AlertViewModel
    
    @State private var tasks = [
        "Vérifier l'alerte",
        "Informer tes proches",
        "Préparer ton sac",
        "Écouter les consignes de sécurité",
        "Chercher un endroit sûr",
        "Vérifier la route d’évacuation",
        "Préparer l'évacuation"
    ]
    
    @State private var isChecked = Array(repeating: false, count: 7)


    var onClose: () -> Void

    
    var body: some View {
        ZStack {
            
            Color.red.opacity(0.5)
                .frame(height: UIScreen.main.bounds.height * 1.1)
                .clipped()
                .blur(radius: 12)
            
            VStack {
                
                VStack(alignment: .center, spacing: 20){
                    Text("Plan d'action en cas d'inondation")
                        .font(.title2)
                        .fontWeight(.heavy)
                        .foregroundColor(Color(.white))
                        .multilineTextAlignment(.center)
                    
                    .padding(.bottom)
                    
                    VStack(alignment: .leading, spacing: 15) {
                        
                        ForEach(tasks.indices, id: \.self) { index in
                            HStack {
                                Button(action: {
                                    isChecked[index].toggle()
                                }) {
                                    
                                    HStack {
                                        Image(systemName: isChecked[index] ? "checkmark.square.fill" : "square")
                                            .foregroundColor(isChecked[index] ? .time : .white)
                                        Text(tasks[index])
                                            .font(.body)
                                            .foregroundColor(Color(.white))
                                    }
                                }
                            }
                        }
                    }.padding()
                    
                    CustomButton(text: "Je suis en sécurité") {
                        if isChecked.allSatisfy({ $0 }) {
                            onClose()
                        }
                    }
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
            }.padding()
        }
        .shadow( color: Color(.secondary).opacity(0.4), radius: 12)
        
    }
}


#Preview {
    //TodoView()
}
