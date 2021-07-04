// アロー関数
export const logMessage = (message: string): void => {
    console.log('Function basic sample 1:', message) 
}

export const alwaysThrowError = (message: string): never => {
    throw new Error(message)
}

// 呼び出しシグネチャ（省略記法）
type LogMessage = (message: string) => void
export const logMessage5: LogMessage = (message) => {
  console.log('Function basic sample 5:', message)
}

// 呼び出しシグネイチャ適用した↑関数と同義
export const logMessage5NonType = (message: string): void => {
    console.log('Function basic sample 5 non signature :', message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}

export const logMessage6: FullLogMessage = (message) => {
  console.log('Function basic sample 6:', message)
}