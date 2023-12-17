import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
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
// holidayCollectible2023
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const holidayCollectible2023ABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [],
    name: 'contractURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'safeMint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'pure',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
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

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__.
 */
export function useHolidayCollectible2023Read<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useHolidayCollectible2023BalanceOf<
  TFunctionName extends 'balanceOf',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'balanceOf',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"contractURI"`.
 */
export function useHolidayCollectible2023ContractUri<
  TFunctionName extends 'contractURI',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'contractURI',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useHolidayCollectible2023GetApproved<
  TFunctionName extends 'getApproved',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'getApproved',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useHolidayCollectible2023IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'isApprovedForAll',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"name"`.
 */
export function useHolidayCollectible2023Name<
  TFunctionName extends 'name',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'name',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useHolidayCollectible2023OwnerOf<
  TFunctionName extends 'ownerOf',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'ownerOf',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useHolidayCollectible2023SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'supportsInterface',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"symbol"`.
 */
export function useHolidayCollectible2023Symbol<
  TFunctionName extends 'symbol',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'symbol',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useHolidayCollectible2023TokenUri<
  TFunctionName extends 'tokenURI',
  TSelectData = ReadContractResult<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >,
>(
  config: Omit<
    UseContractReadConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: holidayCollectible2023ABI,
    functionName: 'tokenURI',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__.
 */
export function useHolidayCollectible2023Write<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TMode
  >({ abi: holidayCollectible2023ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"approve"`.
 */
export function useHolidayCollectible2023Approve<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'approve'
        >['request']['abi'],
        'approve',
        TMode
      > & { functionName?: 'approve' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'approve',
        TMode
      > & {
        abi?: never
        functionName?: 'approve'
      } = {} as any,
) {
  return useContractWrite<typeof holidayCollectible2023ABI, 'approve', TMode>({
    abi: holidayCollectible2023ABI,
    functionName: 'approve',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"safeMint"`.
 */
export function useHolidayCollectible2023SafeMint<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'safeMint'
        >['request']['abi'],
        'safeMint',
        TMode
      > & { functionName?: 'safeMint' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'safeMint',
        TMode
      > & {
        abi?: never
        functionName?: 'safeMint'
      } = {} as any,
) {
  return useContractWrite<typeof holidayCollectible2023ABI, 'safeMint', TMode>({
    abi: holidayCollectible2023ABI,
    functionName: 'safeMint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useHolidayCollectible2023SafeTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'safeTransferFrom'
        >['request']['abi'],
        'safeTransferFrom',
        TMode
      > & { functionName?: 'safeTransferFrom' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'safeTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    'safeTransferFrom',
    TMode
  >({
    abi: holidayCollectible2023ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useHolidayCollectible2023SetApprovalForAll<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'setApprovalForAll'
        >['request']['abi'],
        'setApprovalForAll',
        TMode
      > & { functionName?: 'setApprovalForAll' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'setApprovalForAll',
        TMode
      > & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    'setApprovalForAll',
    TMode
  >({
    abi: holidayCollectible2023ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useHolidayCollectible2023TransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'transferFrom'
        >['request']['abi'],
        'transferFrom',
        TMode
      > & { functionName?: 'transferFrom' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'transferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    'transferFrom',
    TMode
  >({
    abi: holidayCollectible2023ABI,
    functionName: 'transferFrom',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__.
 */
export function usePrepareHolidayCollectible2023Write<
  TFunctionName extends string,
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      TFunctionName
    >,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareHolidayCollectible2023Approve(
  config: Omit<
    UsePrepareContractWriteConfig<typeof holidayCollectible2023ABI, 'approve'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'approve',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'approve'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"safeMint"`.
 */
export function usePrepareHolidayCollectible2023SafeMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof holidayCollectible2023ABI, 'safeMint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'safeMint',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'safeMint'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareHolidayCollectible2023SafeTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'safeTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'safeTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareHolidayCollectible2023SetApprovalForAll(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'setApprovalForAll'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'setApprovalForAll',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareHolidayCollectible2023TransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'transferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'transferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__.
 */
export function useHolidayCollectible2023Event<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof holidayCollectible2023ABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    ...config,
  } as UseContractEventConfig<typeof holidayCollectible2023ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `eventName` set to `"Approval"`.
 */
export function useHolidayCollectible2023ApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof holidayCollectible2023ABI, 'Approval'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    eventName: 'Approval',
    ...config,
  } as UseContractEventConfig<typeof holidayCollectible2023ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useHolidayCollectible2023ApprovalForAllEvent(
  config: Omit<
    UseContractEventConfig<typeof holidayCollectible2023ABI, 'ApprovalForAll'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    eventName: 'ApprovalForAll',
    ...config,
  } as UseContractEventConfig<
    typeof holidayCollectible2023ABI,
    'ApprovalForAll'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useHolidayCollectible2023TransferEvent(
  config: Omit<
    UseContractEventConfig<typeof holidayCollectible2023ABI, 'Transfer'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    eventName: 'Transfer',
    ...config,
  } as UseContractEventConfig<typeof holidayCollectible2023ABI, 'Transfer'>)
}
