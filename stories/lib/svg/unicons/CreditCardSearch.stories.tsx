import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { CreditCardSearch, CreditCardSearchPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/CreditCardSearch",
  component: CreditCardSearch,
} as ComponentMeta<typeof CreditCardSearch>;

const Template: ComponentStory<typeof CreditCardSearch> = (
  args: CreditCardSearchPropsI
) => (
  <x.div display="flex" gap="20px">
    <CreditCardSearch {...args} />
    <CreditCardSearch {...args} fill="red.500" />
    <CreditCardSearch {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
