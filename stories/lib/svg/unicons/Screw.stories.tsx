import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Screw, ScrewPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Screw",
  component: Screw,
} as ComponentMeta<typeof Screw>;

const Template: ComponentStory<typeof Screw> = (args: ScrewPropsI) => (
  <x.div display="flex" gap="20px">
    <Screw {...args} />
    <Screw {...args} fill="red.500" />
    <Screw {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
