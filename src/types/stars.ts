export interface StartContainerStyle {
  width: string
  height: string
  animationName: string
  animationDuration: string
  animationDelay: string
}

export interface StarStyle {
  animationDelay: string
}

export interface Star {
  containerStyle: StartContainerStyle
  style: StarStyle
}
