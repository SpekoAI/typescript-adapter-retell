# @spekoai/adapter-retell — skill sheet

> **Status: scaffold-only. Not production-ready.**

## When to use

Don't use this package yet. It's a placeholder for a future Retell
adapter that will let Retell agents call Speko's proxy endpoints
(STT/LLM/TTS routing + failover).

If you need Retell + Speko today, configure your Retell agent's custom
LLM webhook to point at your own backend that calls `@spekoai/sdk`.

## What exists today

A scaffolded npm package (`@spekoai/adapter-retell`) with no runtime
API surface. Version tracks `0.0.0` on purpose.

## See also

- README: `spekoai://docs/adapter-retell-readme`
- Supported adapter today: `spekoai://docs/adapter-livekit-skills`
