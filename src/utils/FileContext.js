import React from "react";

const DBFileContext = React.createContext({});

export const FileContext = DBFileContext;
export const DBFileProvider = DBFileContext.Provider;
export const DBFileConsumer = DBFileContext.Consumer;