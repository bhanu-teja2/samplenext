import '@styles/global.css';

export const metadata={
    title: "SSP-DRAFTS",
    description: 'Discover & Share AI Promts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div>
                {children}
            </div>
        </body>

    </html>
  )
}

export default RootLayout