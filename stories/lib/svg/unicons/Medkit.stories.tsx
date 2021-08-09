import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Medkit, MedkitPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Medkit",
  component: Medkit,
} as ComponentMeta<typeof Medkit>;

const Template: ComponentStory<typeof Medkit> = (args: MedkitPropsI) => (
  <x.div display="flex" gap="20px">
    <Medkit {...args} />
    <Medkit {...args} fill="red.500" />
    <Medkit {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
