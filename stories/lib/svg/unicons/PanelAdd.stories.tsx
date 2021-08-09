import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { PanelAdd, PanelAddPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/PanelAdd",
  component: PanelAdd,
} as ComponentMeta<typeof PanelAdd>;

const Template: ComponentStory<typeof PanelAdd> = (args: PanelAddPropsI) => (
  <x.div display="flex" gap="20px">
    <PanelAdd {...args} />
    <PanelAdd {...args} fill="red.500" />
    <PanelAdd {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
