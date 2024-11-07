import SwiftUI

struct CustomTextField: View {
    
    @State var text: String
    @FocusState var isFocused: Bool
    
    var placeholder: String
    var title: String
    var keyboardType: UIKeyboardType = .default
    var secure: Bool? = false
    
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            if !title.isEmpty {
                Text(title)
                    .font(.system(size: 14, weight: .bold))
                    .foregroundStyle(Color(.secondary))
            }
            HStack {
                if secure == true {
                    SecureField(placeholder, text: $text)
                        .font(.system(size: 16, weight: .regular))
                        .foregroundColor(.white)
                        .focused($isFocused)
                } else {
                    TextField(placeholder, text: $text)
                        .font(.system(size: 16, weight: .regular))
                        .keyboardType(keyboardType)
                        .foregroundColor(.white)
                        .focused($isFocused)
                }
            }
            
        }
        .padding(.vertical, 14)
        .padding(.leading, 22)
        .background(
            RoundedRectangle(cornerRadius: 12)
                .fill(Color(.primary))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color.white, lineWidth: 1)
        )
        .shadow(color: isFocused ? Color(.secondary).opacity(0.8) : .clear, radius: 10, x: 0, y: 0)
        .frame(maxWidth: .infinity, alignment: .leading)
    }
}

#Preview {
    CustomTextField(text: "", placeholder: "Tape ton texte", title: "Mon Titre")
}
