import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FlipVAlt, FlipVAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FlipVAlt",
  component: FlipVAlt,
} as ComponentMeta<typeof FlipVAlt>;

const Template: ComponentStory<typeof FlipVAlt> = (args: FlipVAltPropsI) => (
  <x.div display="flex" gap="20px">
    <FlipVAlt {...args} />
    <FlipVAlt {...args} fill="red.500" />
    <FlipVAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
