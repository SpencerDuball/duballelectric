import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Coronavirus, CoronavirusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Coronavirus",
  component: Coronavirus,
} as ComponentMeta<typeof Coronavirus>;

const Template: ComponentStory<typeof Coronavirus> = (
  args: CoronavirusPropsI
) => (
  <x.div display="flex" gap="20px">
    <Coronavirus {...args} />
    <Coronavirus {...args} fill="red.500" />
    <Coronavirus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
