//
//  EventView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct EventView: View {
    @ObservedObject var viewModel: GameViewModel
    
    @State private var time: CGFloat = 1.0
    private let countdownDuration: CGFloat = 30.0
    
    var body: some View {
        
        VStack(spacing: 30) {
            Spacer()
            HStack {
                Image(systemName: "timer.circle.fill")
                    .foregroundStyle(Color(.time))
                    .shadow( color: Color(.secondary).opacity(1), radius: 12)
                ZStack(alignment: .leading) {
                    RoundedRectangle(cornerRadius: 100)
                        .fill(Color.white)
                        .frame(height: 15)
                    
                    RoundedRectangle(cornerRadius: 100)
                        .fill(Color(.secondary))
                        .padding(1)
                        .frame(width: time * UIScreen.main.bounds.width * 0.8, height: 15)
                        
                }
                
                .cornerRadius(100)
            }
            AsyncImage(url : URL(string:"https://picsum.photos/200/300")){image in image.resizable().aspectRatio(contentMode: .fill)
                    } placeholder: {
                      Color.white
                    }
                .frame(width: .infinity, height: 150)
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.white, lineWidth: 3)
                )
                .clipShape(RoundedRectangle(cornerRadius: 12))
            
            
            Text(viewModel.currentNode?.description ?? "Description non disponible")
                .font(.system(size: 16))
                .foregroundStyle(.white)
                .padding()
                .background(
                    RoundedRectangle(cornerRadius: 12)
                        .stroke(Color.white, lineWidth: 1)
                        .background(Color(.primary).opacity(0).cornerRadius(12))
                )
                .padding(.bottom, 30)
            
            VStack(spacing: 20) {
               
                ForEach(viewModel.currentNode?.responses ?? [], id: \.description) { response in
                               ChoiceButton(text: response.description) {
                                   viewModel.selectResponse(response)
                               }
                           }
            }
            Spacer()
        }
        .padding()
        .ignoresSafeArea()
        .background(Color(.primary))
        .onAppear(perform: startCountdown)
    }
    
    private func startCountdown() {
            Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { timer in
                if time > 0 {
                    time -= 1.0 / countdownDuration
                } else {
                    timer.invalidate()
                }
            }
        }
}



//#Preview {
//    EventView()
//}

