//
//  GameView.swift
//  HackathonTeam10
//
//  Created by Yann CHAVRET on 07/11/2024.
//

import SwiftUI

struct GameView: View {
    @StateObject private var viewModel = GameViewModel()

    var body: some View {
        Group {
            if viewModel.isAfterEvent {
                ZStack {
                    Color(.primary)
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
    }
}

#Preview {
    GameView()
}
