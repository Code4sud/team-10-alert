//
//  Component.swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI
import AVKit
import Combine



struct LoopingVideo: View {
    private let queuePlayer: AVQueuePlayer!
    private let playerLooper: AVPlayerLooper!
    
    @State private var isReady = false  // Pour savoir quand la vidéo est prête

    init(url: URL) {
        let playerItem = AVPlayerItem(url: url)
        self.queuePlayer = AVQueuePlayer(items: [playerItem])
        self.queuePlayer.isMuted = true
        self.playerLooper = AVPlayerLooper(player: queuePlayer, templateItem: playerItem)
    }
    
    var body: some View {
        VStack {
            Component {
                ZStack {
                    VideoPlayer(player: queuePlayer)
                        .disabled(true)
                        .aspectRatio(contentMode: .fill)
                        .frame(width: 222, height: 500) // Taille fixe
                        .onAppear {
                            // Appliquer le frame après que la vue soit apparue
                            DispatchQueue.main.async {
                                self.isReady = true
                            }
                        }
                }
                .clipped()
            }
        }
        .task {
            self.queuePlayer.play()
        }
    }
}

struct Component<Content: View>: View {
    var content: () -> Content
    
    init(@ViewBuilder content: @escaping () -> Content) {
        self.content = content
    }

    var body: some View {
        content()
    }
}
