import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Content {
  'title' : string,
  'heroImage' : string,
  'sidebarContent' : string,
  'mainContent' : string,
  'heroHeadline' : string,
}
export interface FormData {
  'name' : [] | [string],
  'email' : string,
  'message' : [] | [string],
}
export type Result = { 'ok' : null } |
  { 'err' : string };
export type Result_1 = { 'ok' : bigint } |
  { 'err' : string };
export interface _SERVICE {
  'getContent' : ActorMethod<[], Content>,
  'getFormSubmissions' : ActorMethod<[], Array<[bigint, FormData]>>,
  'submitForm' : ActorMethod<[FormData], Result_1>,
  'updateContent' : ActorMethod<[Content], Result>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
