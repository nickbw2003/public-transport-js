export interface VersionInfo {
  ptKernel: PtKernel[];
}

interface PtKernel {
  appVersion: string[];
  dataBuild: string[];
  dataFormat: string[];
}
