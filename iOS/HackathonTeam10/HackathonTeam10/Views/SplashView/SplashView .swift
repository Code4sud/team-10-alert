
//
//  SplashView .swift
//  HackathonTeam10
//
//  Created by Franck Walter on 07/11/2024.
//

import SwiftUI



struct SplashView: View {

    var body: some View {
        ZStack {
            Image("splash_bg")
                .resizable()
                .scaledToFill()
                .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                .clipped()
                .ignoresSafeArea()
            Image("logo")
                .resizable()
                .scaledToFit()
                .frame(width: 350)
        }
    }
}

#Preview {
    SplashView()
}


#Preview {
    SplashView()
}
