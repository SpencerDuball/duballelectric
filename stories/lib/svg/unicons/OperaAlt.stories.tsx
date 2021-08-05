import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { OperaAlt, OperaAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/OperaAlt",
  component: OperaAlt,
} as ComponentMeta<typeof OperaAlt>;

const Template: ComponentStory<typeof OperaAlt> = (args: OperaAltPropsI) => (
  <x.div display="flex" gap="20px">
    <OperaAlt {...args} />
    <OperaAlt {...args} fill="red.500" />
    <OperaAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
