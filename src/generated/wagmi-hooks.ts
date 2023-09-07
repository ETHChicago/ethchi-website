import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// faucet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const faucetABI = [
  { stateMutability: 'payable', type: 'constructor', inputs: [] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'claimAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      { name: 'claimer', internalType: 'address payable', type: 'address' },
    ],
    name: 'claimTokens',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'claimed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [],
    name: 'donate',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newClaimAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setClaimAmount',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'setOwner',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link faucetABI}__.
 */
export function useFaucetRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof faucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>,
    'abi'
  > = {} as any,
) {
  return useContractRead({ abi: faucetABI, ...config } as UseContractReadConfig<
    typeof faucetABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"claimAmount"`.
 */
export function useFaucetClaimAmount<
  TFunctionName extends 'claimAmount',
  TSelectData = ReadContractResult<typeof faucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: faucetABI,
    functionName: 'claimAmount',
    ...config,
  } as UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"claimed"`.
 */
export function useFaucetClaimed<
  TFunctionName extends 'claimed',
  TSelectData = ReadContractResult<typeof faucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: faucetABI,
    functionName: 'claimed',
    ...config,
  } as UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"owner"`.
 */
export function useFaucetOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof faucetABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: faucetABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<typeof faucetABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__.
 */
export function useFaucetWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<typeof faucetABI, string>['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof faucetABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof faucetABI, TFunctionName, TMode>({
    abi: faucetABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"claimTokens"`.
 */
export function useFaucetClaimTokens<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof faucetABI,
          'claimTokens'
        >['request']['abi'],
        'claimTokens',
        TMode
      > & { functionName?: 'claimTokens' }
    : UseContractWriteConfig<typeof faucetABI, 'claimTokens', TMode> & {
        abi?: never
        functionName?: 'claimTokens'
      } = {} as any,
) {
  return useContractWrite<typeof faucetABI, 'claimTokens', TMode>({
    abi: faucetABI,
    functionName: 'claimTokens',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"donate"`.
 */
export function useFaucetDonate<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof faucetABI,
          'donate'
        >['request']['abi'],
        'donate',
        TMode
      > & { functionName?: 'donate' }
    : UseContractWriteConfig<typeof faucetABI, 'donate', TMode> & {
        abi?: never
        functionName?: 'donate'
      } = {} as any,
) {
  return useContractWrite<typeof faucetABI, 'donate', TMode>({
    abi: faucetABI,
    functionName: 'donate',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"setClaimAmount"`.
 */
export function useFaucetSetClaimAmount<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof faucetABI,
          'setClaimAmount'
        >['request']['abi'],
        'setClaimAmount',
        TMode
      > & { functionName?: 'setClaimAmount' }
    : UseContractWriteConfig<typeof faucetABI, 'setClaimAmount', TMode> & {
        abi?: never
        functionName?: 'setClaimAmount'
      } = {} as any,
) {
  return useContractWrite<typeof faucetABI, 'setClaimAmount', TMode>({
    abi: faucetABI,
    functionName: 'setClaimAmount',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"setOwner"`.
 */
export function useFaucetSetOwner<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof faucetABI,
          'setOwner'
        >['request']['abi'],
        'setOwner',
        TMode
      > & { functionName?: 'setOwner' }
    : UseContractWriteConfig<typeof faucetABI, 'setOwner', TMode> & {
        abi?: never
        functionName?: 'setOwner'
      } = {} as any,
) {
  return useContractWrite<typeof faucetABI, 'setOwner', TMode>({
    abi: faucetABI,
    functionName: 'setOwner',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__.
 */
export function usePrepareFaucetWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: faucetABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"claimTokens"`.
 */
export function usePrepareFaucetClaimTokens(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, 'claimTokens'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: faucetABI,
    functionName: 'claimTokens',
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, 'claimTokens'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"donate"`.
 */
export function usePrepareFaucetDonate(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, 'donate'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: faucetABI,
    functionName: 'donate',
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, 'donate'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"setClaimAmount"`.
 */
export function usePrepareFaucetSetClaimAmount(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, 'setClaimAmount'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: faucetABI,
    functionName: 'setClaimAmount',
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, 'setClaimAmount'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link faucetABI}__ and `functionName` set to `"setOwner"`.
 */
export function usePrepareFaucetSetOwner(
  config: Omit<
    UsePrepareContractWriteConfig<typeof faucetABI, 'setOwner'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: faucetABI,
    functionName: 'setOwner',
    ...config,
  } as UsePrepareContractWriteConfig<typeof faucetABI, 'setOwner'>)
}
