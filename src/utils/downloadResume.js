export const downloadResume = (resumeUrl) => {
  if (resumeUrl && resumeUrl !== '#') {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Chandan_Kumar_Resume.pdf'
    link.target = '_blank'
    link.click()
  } else {
    // Fallback: You can show a message or open email
    console.log('Resume URL not configured. Please update the resumeUrl in constants/personalInfo.js')
  }
}

