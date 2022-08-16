import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
const driver = new Driver({
  //   className: 'scoped-class', // className to wrap driver.js popover
  animate: false, // Animate while changing highlighted element
  opacity: 0, // Background opacity (0 means only popovers and without overlay)
  padding: 10, // Distance of element from around the edges
  allowClose: true, // Whether clicking on overlay should close or not
  overlayClickNext: false, // Should it move to next step on overlay click
  doneBtnText: 'Done', // Text on the final button
  closeBtnText: 'Close', // Text on the close button for this step
  nextBtnText: 'Next', // Next button text for this step
  prevBtnText: 'Previous', // Previous button text for this step
  keyboardControl: true, // Allow controlling through keyboard (escape to close, arrow keys to move)
  scrollIntoViewOptions: {} // We use `scrollIntoView()` when possible, pass here the options for it if you want any
})
// Define the steps for introduction
driver.defineSteps([
  {
    element: '#first-element-introduction',
    popover: {
      className: 'first-step-popover-class',
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'left'
    }
  },
  {
    element: '#second-element-introduction',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'left'
    }
  },
  {
    element: '#third-element-introduction',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'left'
    }
  }
])
export default driver
// Start the introduction
