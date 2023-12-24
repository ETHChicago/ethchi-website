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
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
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
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipients', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'airdrop',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintBatch',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'mintOpen',
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
    inputs: [],
    name: 'nextId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newuri', internalType: 'string', type: 'string' }],
    name: 'setURI',
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
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'toggleMinting',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'uri',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
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
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"balanceOfBatch"`.
 */
export function useHolidayCollectible2023BalanceOfBatch<
  TFunctionName extends 'balanceOfBatch',
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
    functionName: 'balanceOfBatch',
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
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"mintOpen"`.
 */
export function useHolidayCollectible2023MintOpen<
  TFunctionName extends 'mintOpen',
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
    functionName: 'mintOpen',
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
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"nextId"`.
 */
export function useHolidayCollectible2023NextId<
  TFunctionName extends 'nextId',
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
    functionName: 'nextId',
    ...config,
  } as UseContractReadConfig<
    typeof holidayCollectible2023ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"owner"`.
 */
export function useHolidayCollectible2023Owner<
  TFunctionName extends 'owner',
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
    functionName: 'owner',
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
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"uri"`.
 */
export function useHolidayCollectible2023Uri<
  TFunctionName extends 'uri',
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
    functionName: 'uri',
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
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"airdrop"`.
 */
export function useHolidayCollectible2023Airdrop<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'airdrop'
        >['request']['abi'],
        'airdrop',
        TMode
      > & { functionName?: 'airdrop' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'airdrop',
        TMode
      > & {
        abi?: never
        functionName?: 'airdrop'
      } = {} as any,
) {
  return useContractWrite<typeof holidayCollectible2023ABI, 'airdrop', TMode>({
    abi: holidayCollectible2023ABI,
    functionName: 'airdrop',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"mint"`.
 */
export function useHolidayCollectible2023Mint<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'mint'
        >['request']['abi'],
        'mint',
        TMode
      > & { functionName?: 'mint' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'mint',
        TMode
      > & {
        abi?: never
        functionName?: 'mint'
      } = {} as any,
) {
  return useContractWrite<typeof holidayCollectible2023ABI, 'mint', TMode>({
    abi: holidayCollectible2023ABI,
    functionName: 'mint',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"mintBatch"`.
 */
export function useHolidayCollectible2023MintBatch<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'mintBatch'
        >['request']['abi'],
        'mintBatch',
        TMode
      > & { functionName?: 'mintBatch' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'mintBatch',
        TMode
      > & {
        abi?: never
        functionName?: 'mintBatch'
      } = {} as any,
) {
  return useContractWrite<typeof holidayCollectible2023ABI, 'mintBatch', TMode>(
    {
      abi: holidayCollectible2023ABI,
      functionName: 'mintBatch',
      ...config,
    } as any,
  )
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useHolidayCollectible2023RenounceOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'renounceOwnership'
        >['request']['abi'],
        'renounceOwnership',
        TMode
      > & { functionName?: 'renounceOwnership' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'renounceOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    'renounceOwnership',
    TMode
  >({
    abi: holidayCollectible2023ABI,
    functionName: 'renounceOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function useHolidayCollectible2023SafeBatchTransferFrom<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'safeBatchTransferFrom'
        >['request']['abi'],
        'safeBatchTransferFrom',
        TMode
      > & { functionName?: 'safeBatchTransferFrom' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'safeBatchTransferFrom',
        TMode
      > & {
        abi?: never
        functionName?: 'safeBatchTransferFrom'
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    'safeBatchTransferFrom',
    TMode
  >({
    abi: holidayCollectible2023ABI,
    functionName: 'safeBatchTransferFrom',
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
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"setURI"`.
 */
export function useHolidayCollectible2023SetUri<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'setURI'
        >['request']['abi'],
        'setURI',
        TMode
      > & { functionName?: 'setURI' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'setURI',
        TMode
      > & {
        abi?: never
        functionName?: 'setURI'
      } = {} as any,
) {
  return useContractWrite<typeof holidayCollectible2023ABI, 'setURI', TMode>({
    abi: holidayCollectible2023ABI,
    functionName: 'setURI',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"toggleMinting"`.
 */
export function useHolidayCollectible2023ToggleMinting<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'toggleMinting'
        >['request']['abi'],
        'toggleMinting',
        TMode
      > & { functionName?: 'toggleMinting' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'toggleMinting',
        TMode
      > & {
        abi?: never
        functionName?: 'toggleMinting'
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    'toggleMinting',
    TMode
  >({
    abi: holidayCollectible2023ABI,
    functionName: 'toggleMinting',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useHolidayCollectible2023TransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof holidayCollectible2023ABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof holidayCollectible2023ABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof holidayCollectible2023ABI,
    'transferOwnership',
    TMode
  >({
    abi: holidayCollectible2023ABI,
    functionName: 'transferOwnership',
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
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"airdrop"`.
 */
export function usePrepareHolidayCollectible2023Airdrop(
  config: Omit<
    UsePrepareContractWriteConfig<typeof holidayCollectible2023ABI, 'airdrop'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'airdrop',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'airdrop'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareHolidayCollectible2023Mint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof holidayCollectible2023ABI, 'mint'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'mint',
    ...config,
  } as UsePrepareContractWriteConfig<typeof holidayCollectible2023ABI, 'mint'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"mintBatch"`.
 */
export function usePrepareHolidayCollectible2023MintBatch(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'mintBatch'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'mintBatch',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'mintBatch'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareHolidayCollectible2023RenounceOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'renounceOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'renounceOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"safeBatchTransferFrom"`.
 */
export function usePrepareHolidayCollectible2023SafeBatchTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'safeBatchTransferFrom'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'safeBatchTransferFrom',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'safeBatchTransferFrom'
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
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"setURI"`.
 */
export function usePrepareHolidayCollectible2023SetUri(
  config: Omit<
    UsePrepareContractWriteConfig<typeof holidayCollectible2023ABI, 'setURI'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'setURI',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'setURI'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"toggleMinting"`.
 */
export function usePrepareHolidayCollectible2023ToggleMinting(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'toggleMinting'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'toggleMinting',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'toggleMinting'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareHolidayCollectible2023TransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof holidayCollectible2023ABI,
      'transferOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: holidayCollectible2023ABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof holidayCollectible2023ABI,
    'transferOwnership'
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
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useHolidayCollectible2023OwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<
      typeof holidayCollectible2023ABI,
      'OwnershipTransferred'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<
    typeof holidayCollectible2023ABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `eventName` set to `"TransferBatch"`.
 */
export function useHolidayCollectible2023TransferBatchEvent(
  config: Omit<
    UseContractEventConfig<typeof holidayCollectible2023ABI, 'TransferBatch'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    eventName: 'TransferBatch',
    ...config,
  } as UseContractEventConfig<
    typeof holidayCollectible2023ABI,
    'TransferBatch'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `eventName` set to `"TransferSingle"`.
 */
export function useHolidayCollectible2023TransferSingleEvent(
  config: Omit<
    UseContractEventConfig<typeof holidayCollectible2023ABI, 'TransferSingle'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    eventName: 'TransferSingle',
    ...config,
  } as UseContractEventConfig<
    typeof holidayCollectible2023ABI,
    'TransferSingle'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link holidayCollectible2023ABI}__ and `eventName` set to `"URI"`.
 */
export function useHolidayCollectible2023UriEvent(
  config: Omit<
    UseContractEventConfig<typeof holidayCollectible2023ABI, 'URI'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: holidayCollectible2023ABI,
    eventName: 'URI',
    ...config,
  } as UseContractEventConfig<typeof holidayCollectible2023ABI, 'URI'>)
}
