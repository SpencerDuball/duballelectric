import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Ankh, AnkhPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Ankh",
  component: Ankh,
} as ComponentMeta<typeof Ankh>;

const Template: ComponentStory<typeof Ankh> = (args: AnkhPropsI) => (
  <x.div display="flex" gap="20px">
    <Ankh {...args} />
    <Ankh {...args} fill="red.500" />
    <Ankh {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
