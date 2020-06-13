export const state = () => ({
  isMobileMenuVisible: false
})

export const mutations = {
  openMenu (state) {
    state.isMenuVisible = true
  },
  closeMenu (state) {
    state.isMenuVisible = false
  },
  toggleMobileMenu (state, value) {
    state.isMobileMenuVisible = value
  },
  closeMobileMenu (state) {
    state.isMobileMenuVisible = false
  },
  setPageLoaded (state, value) {
    state.pageLoaded = value
  }
}
