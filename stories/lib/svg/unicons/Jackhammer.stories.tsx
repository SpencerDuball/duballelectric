import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Jackhammer, JackhammerPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Jackhammer",
  component: Jackhammer,
} as ComponentMeta<typeof Jackhammer>;

const Template: ComponentStory<typeof Jackhammer> = (
  args: JackhammerPropsI
) => (
  <x.div display="flex" gap="20px">
    <Jackhammer {...args} />
    <Jackhammer {...args} fill="red.500" />
    <Jackhammer {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
