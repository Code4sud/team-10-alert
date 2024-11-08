//
//  AfterEventView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct AfterEventView: View {
    @ObservedObject var viewModel: GameViewModel
    @State private var showHealthPoints: Bool = true
    @State private var showWisdomPoints: Bool = true
    
    @State private var navigateToMap = false
    @State private var isShowingQuit = false
    
    var body: some View {
        let health: CGFloat = min(viewModel.currentUser.health, 1.0)
        let wisdom: CGFloat = min(viewModel.currentUser.wisdom, 1.0)
        NavigationStack {
            ZStack {
                
                VStack(spacing: 20) {
                    HStack {
                        Image(systemName: "heart.circle.fill")
                            .foregroundStyle(Color(.health))
                            .shadow( color: Color(.secondary).opacity(1), radius: 12)
                        ZStack(alignment: .leading) {
                            RoundedRectangle(cornerRadius: 100)
                                .fill(Color.white)
                                .frame(height: 15)
                            
                            RoundedRectangle(cornerRadius: 100)
                                .fill(Color(.secondary))
                                .padding(1)
                                .frame(maxWidth: min(health * UIScreen.main.bounds.width, UIScreen.main.bounds.width), maxHeight: 15)
                        }
                        .cornerRadius(100)
                        
                        
                    }
                    .padding(.top, 50)
                    
                    HStack {
                        Image(systemName: "bolt.circle.fill")
                            .foregroundStyle(Color(.wisdom))
                            .shadow( color: Color(.secondary).opacity(1), radius: 12)
                        ZStack(alignment: .leading) {
                            RoundedRectangle(cornerRadius: 100)
                                .fill(Color.white)
                                .frame(height: 15)
                            
                            RoundedRectangle(cornerRadius: 100)
                                .fill(Color(.secondary))
                                .padding(1)
                                .frame(maxWidth: min(wisdom * UIScreen.main.bounds.width, UIScreen.main.bounds.width), maxHeight: 15)
                        }
                        .cornerRadius(100)
                    }
                    
                    Text(viewModel.selectedResponse?.scoreDescription ?? "")
                        .font(.largeTitle)
                        .fontWeight(.bold)
                        .foregroundColor(Color(.secondary))
                        .shadow( color: Color(.secondary).opacity(0.9), radius: 12)
                        .padding(.top, 20)
                    
                    
                    Text("\(viewModel.selectedResponse?.healthPointsImpact ?? 0) Points de vie")
                        .foregroundColor(Color(.health))
                        .font(.system(size: 16, weight: .bold))
                        .opacity(showHealthPoints ? 1 : 0)
                        .animation(.easeInOut(duration: 1), value: showHealthPoints)
                    
                    Text("\(viewModel.selectedResponse?.wisePointsImpact ?? 0) Points de sagesse")
                        .foregroundColor(Color(.wisdom))
                        .font(.system(size: 16, weight: .bold))
                        .opacity(showWisdomPoints ? 1 : 0)
                        .animation(.easeInOut(duration: 1), value: showWisdomPoints)
                    
                    HStack(alignment: .top) {
                        Image("Avatar2")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 151, height: 370)
                        //                AsyncImage(url : URL(string:"https://picsum.photos/200/300")){image in image.resizable()
                        //                        .aspectRatio(contentMode: .fit)
                        //                        } placeholder: {
                        //                          Color.white
                        //                        }
                        //                    .frame(width: 131, height: 470)
                        //                    .background(
                        //                        RoundedRectangle(cornerRadius: 12)
                        //                            .stroke(Color.white, lineWidth: 3)
                        //                    )
                        
                        Text(viewModel.selectedResponse?.effectDescription ?? "")
                            .foregroundColor(.white)
                            .font(.system(size:12, weight: .regular))
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
                    .frame(width: .infinity, height: 400)
                    .padding(.horizontal)
                    
                    HStack {
                        Button("Retour\nCarte"){
                            isShowingQuit = true
                        }.font(.system(size: 16, weight: .bold))
                            .foregroundStyle(.white)
                        
                        Spacer()
                        CustomButton(text: "Continue") {
                            viewModel.proceedToNextEvent()
                        }
                        .padding(.leading, 40)
                    }
                    
                    .padding(.horizontal, 30)
                    
                }
                .padding()
                .ignoresSafeArea()
                .background(Color(.primary).edgesIgnoringSafeArea(.all))
                .onAppear {
                    DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                        withAnimation {
                            showHealthPoints = false
                            showWisdomPoints = false
                        }
                    }
                }
                
                if isShowingQuit {
                    /*/
                     NavigationLink(
                     destination: MapView(),
                     isActive: $navigateToMap
                     ) {
                     
                     Button("Retour\nCarte"){
                     navigateToMap = true
                     }.font(.system(size: 16, weight: .bold))
                     .foregroundStyle(.white)
                     }*/
                    
                    NavigationLink(
                        destination: MapView(),
                        isActive: $navigateToMap
                    ) {
                        QuitScenarioView(
                            onQuit: {
                                navigateToMap = true
                            }, onClose: {
                                isShowingQuit = false
                            }
                        )
                    }
                }
            }
        }
    }
}

//#Preview {
//    AfterEventView()
//}
