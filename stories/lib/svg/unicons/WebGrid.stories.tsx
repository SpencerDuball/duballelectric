import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { WebGrid, WebGridPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/WebGrid",
  component: WebGrid,
} as ComponentMeta<typeof WebGrid>;

const Template: ComponentStory<typeof WebGrid> = (args: WebGridPropsI) => (
  <x.div display="flex" gap="20px">
    <WebGrid {...args} />
    <WebGrid {...args} fill="red.500" />
    <WebGrid {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
