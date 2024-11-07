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
                AfterEventView(viewModel: viewModel)
            } else {
                EventView(viewModel: viewModel)
            }
        }
        .onAppear {
            viewModel.loadScenario()
        }
    }
}

#Preview {
    GameView()
}
