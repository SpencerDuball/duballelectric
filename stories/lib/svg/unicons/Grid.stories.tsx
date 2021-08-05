import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Grid, GridPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args: GridPropsI) => (
  <x.div display="flex" gap="20px">
    <Grid {...args} />
    <Grid {...args} fill="red.500" />
    <Grid {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
