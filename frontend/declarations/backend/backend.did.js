export const idlFactory = ({ IDL }) => {
  const Content = IDL.Record({
    'title' : IDL.Text,
    'heroImage' : IDL.Text,
    'sidebarContent' : IDL.Text,
    'mainContent' : IDL.Text,
    'heroHeadline' : IDL.Text,
  });
  const FormData = IDL.Record({
    'name' : IDL.Opt(IDL.Text),
    'email' : IDL.Text,
    'message' : IDL.Opt(IDL.Text),
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  return IDL.Service({
    'getContent' : IDL.Func([], [Content], ['query']),
    'getFormSubmissions' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, FormData))],
        ['query'],
      ),
    'submitForm' : IDL.Func([FormData], [Result_1], []),
    'updateContent' : IDL.Func([Content], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
