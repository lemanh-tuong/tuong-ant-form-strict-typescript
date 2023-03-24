import { Parameters, Story } from "@storybook/react";
import React from "react";

const withThemeContext = (StoryComponent: Story) => {
  return <StoryComponent />;
};

export const parameters: Parameters = {
  // Math tất cả props "on..." (onClick, ...)
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
  },
};

export const decorators = [withThemeContext];
