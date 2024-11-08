//
//  GameView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI
import Alamofire

struct GameView: View {
    @StateObject private var viewModel = GameViewModel()

    var body: some View {
        Group {
            if viewModel.isAfterEvent {
                ZStack {
                    Color("aftereventbg")
                        .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                    
                    AfterEventView(viewModel: viewModel)
                }.ignoresSafeArea()
                
            } else {
                EventView(viewModel: viewModel)
            }
        }
        .navigationBarBackButtonHidden(true)
        .onAppear {
            viewModel.loadScenario()
        }
        .fullScreenCover(isPresented: $viewModel.isEndNode) {
            EndScenarioView{}
        }
    }
}
