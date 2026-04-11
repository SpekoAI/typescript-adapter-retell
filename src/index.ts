/**
 * @speko/adapter-retell — Retell adapter for Speko.
 *
 * This package is scaffolded as a placeholder. The real implementation will
 * provide helpers for pointing Retell agents at Speko's proxy endpoints so
 * per-call routing and failover happen invisibly.
 */
export const ADAPTER_STATUS = 'scaffolded' as const;

export type AdapterStatus = typeof ADAPTER_STATUS;
